import http from "../config/http";
import { ArticleType } from "../modules/home/components/company/companyList/models";
import { SERVER_ROUTE } from "./constants";
import { EndpointsEnum } from "./models";

const url = `${SERVER_ROUTE}/${EndpointsEnum.ARTICLE}`;

/* const getAllArticles = () => {
  return http.getData(url)
} */

const addArticle = (article: ArticleType, companyNIT: string) => {
  const payLoad: ArticleType = { ...article, companyNIT }
  return http.postData<ArticleType, ArticleType>(url, payLoad)
}

const updateArticle = (article: ArticleType) => {
  return http.patchData<ArticleType, ArticleType>(url, article, article.id)
}

const deleteArticle = (articleId: string) => {
  return http.deleteData(url, articleId)
}

const ArticleService = {
  /*  getAllArticles, */
  addArticle,
  updateArticle,
  deleteArticle
}

export default ArticleService
