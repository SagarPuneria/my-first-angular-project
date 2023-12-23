export interface INewsResponse {
    articles: INewsArticle[];
    status: string;
    totalResults: number;
}

export interface INewsArticle {
    source: INewsSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface INewsSource {
    id: string;
    name: string;
}