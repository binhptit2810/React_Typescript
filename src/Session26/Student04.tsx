import { useSearchParams } from 'react-router-dom'

export default function Student04() {
    const [searchParams] = useSearchParams()
    const name = searchParams.get('name')
    return (
        <div>Từ khóa vừa nhập :  {name}</div>
    )
}
