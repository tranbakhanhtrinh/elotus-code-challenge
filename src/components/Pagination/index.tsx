import Button from '@/components/Button'
import Input from '@/components/Input/Input'
import './Pagination.scss'
import { useState } from 'react'

type PaginationProps = {
  pageLength: number,
  pageNumber: number,
  setPageNumber: (pageNum: number) => void
}

const Pagination = ({ pageLength, pageNumber = 1, setPageNumber }: PaginationProps) => {
  const [value, setValue] = useState<string>(pageNumber.toString())
  const prevBtn = () => {
    setPageNumber(pageNumber - 1)
  }
  const nextBtn = () => {
    setPageNumber(pageNumber + 1)
  }
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setPageNumber(+value)
  }
  return (
    <div className="flex items-center justify-center flex-column gap-1 mt-1 pagination">
      <div className='page-field'>
        <form onSubmit={handleSubmit}>
          <Input
            inputType='text'
            inputId='pageInput'
            value={value}
            onChange={handleChange}
          /> / {pageLength}
        </form>
      </div>
      <div className='flex items-center justify-center'>
        <Button type="button" onClick={prevBtn} disabled={pageNumber === 1}>
          Prev
        </Button>
        <Button type="button" onClick={nextBtn} disabled={pageNumber === pageLength}>
          Next
        </Button>
      </div>
    </div>
  )
}

export default Pagination