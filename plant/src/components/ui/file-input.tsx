 
import { Input } from "./input";  
interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FileInput({ onChange, ...props }: FileInputProps) {
  return (
    <Input
      type="file"
      onChange={onChange}
      {...props}
    />
  );
}
