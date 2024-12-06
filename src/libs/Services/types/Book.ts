export interface Isbn {
  isbn10: string;
  isbn13: string;
}

export interface BookDetails {
  title: string;
  description: string;
  contributor: string;
  author: string;
  contributor_note: string;
  price: string;
  age_group: string;
  publisher: string;
  primary_isbn13: string;
  primary_isbn10: string;
}

export interface Review {
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
}

export interface Bestseller {
  list_name: string;
  display_name: string;
  bestsellers_date: string;
  published_date: string;
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  amazon_product_url: string;
  isbns: Isbn[];
  book_details: BookDetails[];
  reviews: Review[];
}

export interface BestsellerResults {
  results: Bestseller[];
}
