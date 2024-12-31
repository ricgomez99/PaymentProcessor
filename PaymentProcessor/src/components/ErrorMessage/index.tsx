export default function ErrorMessage({ message }: { message: string }) {
  console.log(message)
  return <span className="text-red-400 text-sm">{message}</span>
}
