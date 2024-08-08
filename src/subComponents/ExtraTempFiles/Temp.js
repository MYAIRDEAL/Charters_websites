import './Tempcss.css'; // Import your custom CSS file for animations
import React from 'react';
import 'antd/dist/reset.css'; // Import Ant Design styles
import { IoMdSwap } from "react-icons/io";

const { RangePicker } = DatePicker;

const Temp = () => {
  return (


    <form >

      <div className="form">


        <div id='first' >
          <label htmlFor='from'>FROM</label>
          <div id='oneinnerdiv' >
            <input
              type='text'
              name='from'
              id='from'
              placeholder='VOBL'

            />
            <IoMdSwap id='icon' />
            <input
              type='text'
              name='to'
              id='to'
              placeholder='OMDW'

            />
          </div>
        </div>


        <div className='second' >
          <label htmlFor='departure'>DEPARTURE</label>
          <DatePicker
            showTime
            format='DD-MM-YYYY HH:mm'
            id='date'
          />

        </div>

        <div className='third'>
          <label htmlFor='passengers'>PASSENGERS</label>
          <input
            type='number'
            name='passengers'
            placeholder='134'

          />
        </div>

        <div className='fourth' >
          <label htmlFor='phone'>Phone</label>
          <input
            type='number'
            name='phone'

          />
        </div>


        <div className='five'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'

          />
        </div>


        <div className='six' >
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'

          />
        </div>

        <div className='seven' >
          <button
            type='submit'

          >
            SHOW ESTIMATES
          </button>
        </div>


      </div>

    </form>


  );
};

export default Temp;



/*


<form action="#" className='w-[100%] flex items-center justify-center' onSubmit={formHandler}>
                <div className=' text-white flex flex-wrap items-center justify-around md:w-[70%] h-[25rem]  md:h-[12rem] p-2'>

                    <div className='flex items-center justify-center text-black rounded-lg p-2 w-full md:w-auto md:p-0'>

                        <div className='flex flex-col '>
                            <h1 className='text-white'>FROM</h1>
                            <div className='md:w-[15rem] h-[3.5rem] flex justify-center md:pl-[2rem] w-[15rem] bg-white rounded-l-lg '>
                                <input type="text" name="from" id="from" placeholder='VOBL' className='w-full rounded-l-lg border-none p-2 outline-none' value={fromValue} onChange={handleFromChange} />
                            </div>
                        </div>


                        <div className='items-center h-[3rem] flex justify-center'>
                            <IoMdSwap className='w-[1.5rem]  text-black absolute mt-5 mr-5 h-[1.5rem] cursor-pointer' onClick={handleSwap} />
                        </div>


                        <div className='flex flex-col '>
                            <h1 className='text-white'>TO</h1>
                            <div className='md:w-[15rem] h-[3.5rem] flex justify-center md:pl-[2rem] w-[15rem] bg-white rounded-r-lg'>
                                <input type="text" name="to" id="to" placeholder='OMDW' className='w-full border-none outline-none rounded-r-lg p-2' value={toValue} onChange={handleToChange} />
                            </div>
                        </div>
                    </div>


                    <div >
                        <h1>DEPARTURE</h1>
                        <Space direction="vertical" className='md:w-[15rem]'>
                            <DatePicker
                                showTime
                                format={'DD-MM-YYYY HH:mm'}
                                onChange={onChange}
                                className='md:w-full w-[14rem] h-[3.5rem]'
                            />
                        </Space>
                    </div>

                    <div className='md:w-[13rem] w-[14rem] rounded-lg'>
                        <h1>
                            PASSENGERS
                        </h1>
                        <input type="number" name='passengers' className=' w-[100%] pl-3 h-[3.5rem] outline-none border-none text-black rounded-lg' />
                    </div>
                    <div className='md:w-[13rem]  w-[14rem] rounded-lg'>
                        <h1>
                            Phone
                        </h1>
                        <input type="number" name='phone' className=' w-[100%] pl-3 h-[3.5rem] outline-none border-none text-black rounded-lg' />
                    </div>
                    <div className='md:w-[16rem] w-[14rem]  rounded-lg'>
                        <h1>
                            Email
                        </h1>
                        <input type="email" name='email' className=' w-[100%] pl-3 h-[3.5rem] outline-none border-none text-black rounded-lg' />
                    </div>
                    <div className=' md:w-[13rem]  w-[14rem]  rounded-lg'>
                        <h1>
                            Name
                        </h1>
                        <input type="email" name='name' className=' w-[100%] pl-3 h-[3.5rem] outline-none border-none text-black rounded-lg' />
                    </div>

                    <div className=' md:w-auto md:mt-0 mt-6'>
                        <button className='bg-hoverColor tracking-[0.2rem] p-3 transition-all hover:scale-110 duration-500 text-white h-[3.5rem] md:w-[10rem]  md:mt-6 w-[14rem] rounded-lg'>
                            SHOW ESTIMATES
                        </button>
                    </div>



                </div>
            </form>


*/