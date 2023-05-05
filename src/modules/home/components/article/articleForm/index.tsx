import { ArticleType } from "../../company/companyList/models";
import ArticleInputForm from "../articleInputForm";
import ArticleList from "../articleList"
import { useState } from 'react';

export type ArticleFormType = {
  articles: ArticleType[]

}

const ArticleForm = ({ articles }: ArticleFormType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleDelete = () => {

  }

  const handleAddNewArticle = () => {

  }

  return (
    <>
      <ArticleList isLoading={isLoading} articles={articles} onDelete={handleDelete} />
      <ArticleInputForm isLoading={isLoading} onAddNewArticle={handleAddNewArticle} />
    </>
  )
}

export default ArticleForm
