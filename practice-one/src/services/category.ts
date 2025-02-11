import {
  CategoriesResponse,
  CategoryResponse,
  PostCategoriesResponse,
} from '@/types';
import {
  MESSAGE,
  SERVER_BASE_URL,
  END_POINT,
  ATTRIBUTE_TYPE,
} from '@/constants';

async function getCategoryData(): Promise<CategoriesResponse> {
  const res = await fetch(`${SERVER_BASE_URL}/api/${END_POINT.CATEGORIES}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    throw new Error(MESSAGE.ERROR);
  }

  const data = res.json();

  return data;
}

async function getCategoryById(id: number): Promise<CategoryResponse> {
  const res = await fetch(
    `${SERVER_BASE_URL}/api/${END_POINT.CATEGORIES}/${id}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(MESSAGE.ERROR);
  }

  const data = res.json();

  return data;
}

async function getPostCategoryById(
  categoryId: number
): Promise<PostCategoriesResponse> {
  const query = `filters[${ATTRIBUTE_TYPE.CATEGORY_ID}][$eq]=${categoryId}`;

  const res = await fetch(
    `${SERVER_BASE_URL}/api/${END_POINT.POST_CATEGORIES}?${query}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(MESSAGE.ERROR);
  }

  const data = res.json();

  return data;
}

export { getCategoryData, getPostCategoryById, getCategoryById };
