import { Typography } from "antd";
import DeleteButton from "../../../../../components/deleteButton";
import { ArticleType } from "../../companyList/models";

export type ArticleItemType = {
  isLoading: boolean
  article: ArticleType
  onDelete: (article: ArticleType) => void;
}

const ArticleItem = ({ isLoading, article, onDelete }: ArticleItemType) => {
  const { name } = article
  return (
    <div>
      <Typography.Text>
        {name}
      </Typography.Text>
      <DeleteButton
        isLoading={isLoading}
        title="Delete article"
        description="Are you sure to delete this article?"
        onDelete={() => onDelete(article)}
      />
    </div>
  )
}

export default ArticleItem
