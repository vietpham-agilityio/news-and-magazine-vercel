interface IProps {
    color?: string;
  }

export const ArrowBack = ({ color="#3E3232"}: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="none"
  >
    <path
      fill={color}
      fillOpacity={0.5}
      d="M13.754 5.957 8.94 10.086c-.41.355-1.066.055-1.066-.492v-2.38c-4.266.056-6.07 1.095-4.84 5.06.137.437-.41.792-.765.519C1.066 11.918 0 10.25 0 8.582c0-4.156 3.473-5.059 7.875-5.113v-2.16c0-.575.656-.875 1.066-.52l4.813 4.129c.3.3.3.766 0 1.039Z"
    />
  </svg>
)
