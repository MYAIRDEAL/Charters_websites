import React, { useEffect, useState } from 'react'
import fleets1 from '../assets/midsize-800-2.jpeg'

import PageBanner from './PageBanner'
import OurFleetsCard from './OurFleetsCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { message } from 'antd'
import ErrorComp from '../components/ErrorComp'


function OurFleetsPage() {


    const [getSubCategory, setGetSubCategory] = useState([]);



    let { type } = useParams();

    useEffect(() => {
        let getSubCategory = async () => {
            try {
                let temp = await axios.get(`http://localhost:8000/api/admin/filter/${type}`)
                setGetSubCategory(temp?.data?.sortedData || [])
            }
            catch(error){
                console.log(error)
            }
        }
        getSubCategory()

    }, [])

    return (
        <div>

            <PageBanner data={'Premium High Class Fleet'} />
            <div className='min-h-[70vh] 375:py-4  bg-white flex flex-wrap items-center gap-6 justify-center'>

                {
                    getSubCategory?.length > 0 ? getSubCategory.map((element, index) => (
                        <OurFleetsCard key={index} props={element} />
                    ))
                    : 
                    <ErrorComp/>
                }



            </div>

        </div>
    )
}

export default OurFleetsPage