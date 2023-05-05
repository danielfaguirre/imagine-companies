import { ArticleType } from "../../company/companyList/models";
import ArticleInputForm from "../articleInputForm";
import ArticleList from "../articleList"

export type ArticleFormType = {
  articles: ArticleType[]

}

const ArticleForm = ({ articles }: ArticleFormType) => {
  const handleDelete = () => {

  }

  const handleAddNewArticle = () => {

  }

  return (
    <>
      <ArticleList isLoading={false} articles={articles} onDelete={handleDelete} />
      <ArticleInputForm isLoading={false} onAddNewArticle={handleAddNewArticle} />
    </>
  )
}

export default ArticleForm
