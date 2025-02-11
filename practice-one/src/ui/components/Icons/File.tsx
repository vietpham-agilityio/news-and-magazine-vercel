interface IProps {
    color?: string;
  }
  
  export const File = ({ color="#3E3232"}: IProps) => (
  <svg
    data-testid= "file-icon"
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={13}
    fill="none"
  >
    <path
      fill={color}
      fillOpacity={0.5}
      d="M12.723 2.375c.984 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75h-10.5c-.985 0-1.75-.766-1.75-1.75v-8.75c0-.957.765-1.75 1.75-1.75h3.226c.465 0 .903.191 1.23.52l1.34 1.23h4.704Zm.437 8.75v-7a.47.47 0 0 0-.437-.438h-5.25l-1.75-1.613a.44.44 0 0 0-.301-.136h-3.2a.45.45 0 0 0-.437.437v8.75c0 .246.192.438.438.438h10.5a.45.45 0 0 0 .437-.438Z"
    />
  </svg>
);
