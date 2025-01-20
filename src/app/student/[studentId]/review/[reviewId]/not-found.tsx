'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const Notfound = () => {
  const pathname= usePathname();
  const studentId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];
    return (
    <>
    <h2>Review for product : {studentId} not found with : {reviewId}</h2>
    </>
  )
}

export default Notfound