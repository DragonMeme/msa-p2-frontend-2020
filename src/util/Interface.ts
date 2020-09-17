export interface IUserPass{
    userName: string | null,
    passWord: string | null
}

export interface IFields{
    fieldID: number,
    name: string,
    value: string
}

export interface IArticle{
    articleID: number,
    author: string,
    createdDate: string,
    title: string,
    introduction: string,
    fields: IFields[] | null
}

export interface IArticleSummary{
    articleID: number,
    author: string,
    createdDate: string,
    title: string,
    introduction: string
}

export interface IUserInput {
    SearchQuery: string | null;
}