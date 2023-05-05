import ArticleItem from "../articleItem"
import { ArticleType } from "../companyList/models"

export type ArticleListType = {
  isLoading: boolean
  articles: ArticleType[]
  onDelete: (article: ArticleType) => void;
}

const ArticleList = ({ isLoading, articles, onDelete }: ArticleListType) => {
  return (
    <>
      {articles.map((article) =>
        <ArticleItem
          key={article.id}
          isLoading={isLoading}
          article={article}
          onDelete={onDelete}
        />
      )}
    </>
  )
}

export default ArticleList
