import * as React from "react"

interface IProps {
    color?: string;
}

export const Search = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    data-testid= "search-icon"
  >
    <path
      fill={color}
      d="M20.531 18.344a1.63 1.63 0 0 1 0 2.226 1.63 1.63 0 0 1-2.226 0l-4.649-4.687c-1.601 1.055-3.554 1.601-5.664 1.328-3.594-.508-6.484-3.438-6.953-6.992-.664-5.313 3.828-9.805 9.14-9.14 3.555.468 6.485 3.359 6.993 6.952a8.111 8.111 0 0 1-1.328 5.625l4.687 4.688ZM4.086 9.125c0 2.773 2.226 5 5 5 2.734 0 5-2.227 5-5 0-2.734-2.266-5-5-5-2.774 0-5 2.266-5 5Z"
    />
  </svg>
)
