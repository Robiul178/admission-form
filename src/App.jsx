
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import './App.css'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { useState } from 'react'

function App() {

  const handleForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const s_name = form.get('sName');
    const f_name = form.get('fName');
    const m_name = form.get('mName');
    const birth_date = form.get('birth_date');
    const admission_class = form.get('check');
    const Place_of_Birth = form.get('Place_of_Birth');
    const gender = form.get('gender');
    const Present_division = form.get('Present_division');
    const Present_district = form.get('Present_district');
    const Present_address = form.get('Present_address');
    const Permanent_division = form.get('Permanent_division');
    const Permanent_district = form.get('Permanent_district');
    const Permanent_address = form.get('Permanent_address');
    const religion = form.get('religion');
    const nationality = form.get('nationality');
    const phoneNumber = form.get('phoneNumber');
    const email = form.get('email');

    const student_info = {
      s_name,
      f_name,
      m_name,
      birth_date,
      admission_class,
      Place_of_Birth,
      gender,
      Present_division,
      Present_district,
      Present_address, Permanent_division, Permanent_district, Permanent_address,
      religion, nationality, phoneNumber, email,
    }

    fetch('https://server-wine-ten.vercel.app/students', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(student_info)
    })
      .then(res => res.json())
      .then(data => {
        //
      })
    alert('Student added successfully')
  }


  return (
    <main>
      <section className='flex justify-between bg-indigo-900 p-3'>
        <div>

        </div>

        <div className='text-center'>
          <h2 className='text-4xl font-bold'><span className='text-blue-600'>COMPLEX</span> <span className="text-white">ACADEMY</span></h2>
          <p className='mt-1'>
            <span className=' p-1 bg-red-500'>Pre-School</span>
            <span className=' p-1 bg-yellow-400'>Day Care</span>
            <span className=' p-1 bg-green-500'>Day After</span>
          </p>
          <p className='mt-6 text-xl text-white'>ADMISSION FORM</p>
        </div>

        <div ></div>
      </section>


      <section className='px-8 py-4'>
        <form
          onSubmit={handleForm}>
          <div className="text-center">
            <div>
              <span className='font-semibold relative top-2 mr-1'>Student Name :</span>
              <TextField id="standard-basic" name='sName' variant="standard" className='w-[1100px]' />
            </div>
            <div>
              <span className='font-semibold relative top-2 mr-3'>Father Name  :</span>
              <TextField id="standard-basic" name='fName' variant="standard" className='w-[1100px]' />
            </div>
            <div>
              <span className='font-semibold  relative top-2 mr-1'>Mother Name :</span>
              <TextField id="standard-basic" name='mName' variant="standard" className='w-[1100px]' />
            </div>
            <div className='p-4'>
              <FormGroup>
                <div className="flex">
                  <h2 className='mt-2 mr-2 '>Admission Seeking In :</h2>
                  <FormControlLabel control={<Checkbox value='Play Group' />} name='check' label='Play Group' />
                  <FormControlLabel control={<Checkbox value="Nursery" />} name='check' label='Nursery' />
                  <FormControlLabel control={<Checkbox value="Day Care" />} name='check' label='Day Care' />
                  <FormControlLabel control={<Checkbox value="Day After" />} name='check' label='Day After' />
                  <FormControlLabel control={<Checkbox value="Prep.Junior" />} name='check' label='Prep.Junior' />
                  <FormControlLabel control={<Checkbox value="Prep.Senior" />} name='check' label='Prep.Senior' />
                </div>
              </FormGroup>
            </div>
          </div>
          <div className='flex'>
            <div className='p-4 '>
              <h2 className=''>Date of Birth :</h2>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker name='birth_date' />
              </LocalizationProvider>
            </div>
            <div className='p-4 mt-4'>
              <span className=' relative top-2 mr-2'>Place of Birth :</span>
              <TextField id="standard-basic" name='Place_of_Birth' variant="standard" className='w-[550px]' />
            </div>
            <div className='p-4 mt-4'>
              <FormGroup>
                <div className="flex">
                  <h2 className='mt-2 mr-2 '>Gender :</h2>
                  <FormControlLabel control={<Checkbox value='male' />} name='gender' label='Male' />
                  <FormControlLabel control={<Checkbox value="female" />} name='gender' label='Female' />
                </div>
              </FormGroup>
            </div>
          </div>

          <div className='border border-dashed p-4'>
            <h2 className='font-semibold'>Present Address :</h2>
            <div className='flex'>
              <div>
                <span className=' relative top-2 mr-2'>Division :</span>
                <TextField id="standard-basic" name='Present_division' variant="standard" className='w-[550px]' />
              </div>
              <div>
                <span className='relative top-2 mr-1'>District:</span>
                <TextField id="standard-basic" name='Present_district' variant="standard" className='w-[550px]' />
              </div>
            </div>
            <div>
              <span className=' relative top-2 mr-1'>Address :</span>
              <TextField id="standard-basic" name='Present_address' variant="standard" className='w-[1160px]' />
            </div>
          </div>

          <div className='border border-dashed p-4 mt-3'>
            <h2 className='font-semibold'>Permanent Address :</h2>
            <div className='flex'>
              <div>
                <span className=' relative top-2 mr-2'>Division :</span>
                <TextField id="standard-basic" name='Permanent_division' variant="standard" className='w-[550px]' />
              </div>
              <div>
                <span className='relative top-2 mr-1'>District:</span>
                <TextField id="standard-basic" name='Permanent_district' variant="standard" className='w-[550px]' />
              </div>
            </div>
            <div>
              <span className=' relative top-2 mr-1'>Address :</span>
              <TextField id="standard-basic" name='Permanent_address' variant="standard" className='w-[1160px]' />
            </div>
          </div>

          <div className='flex'>
            <div>
              <span className=' relative top-2 mr-2'>Religion :</span>
              <TextField id="standard-basic" name='religion' variant="standard" className='w-[550px]' />
            </div>
            <div>
              <span className='relative top-2 mr-1'>Nationality:</span>
              <TextField id="standard-basic" name='nationality' variant="standard" className='w-[540px]' />
            </div>
          </div>
          <div className='flex '>
            <div>
              <span className=' relative top-2 mr-2'>Phone Number :</span>
              <TextField id="standard-basic" name='phoneNumber' type='number' variant="standard" className='w-[500px]' />
            </div>
            <div>
              <span className='relative top-2 mr-1'>Email Address:</span>
              <TextField id="standard-basic" name='email' type='email' variant="standard" className='w-[520px]' />
            </div>
          </div>

          <div className='py-6'>
            <Button variant='contained' >  <input type="submit" /></Button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default App
