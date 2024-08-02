import React from 'react'
import './Layer3.css';

function Layer3() {
  return (
    <div className="container-fluid p-0 " style={{ backgroundColor: '#DBDFE8' }}>

        <div className="row mt-4 p-2">
    
        <div className="col-12 col-md-6 col-lg mb-13 bg-light m-2 h-25">
            <div className="box border border-light p-2">
                <div className='d-flex align-items-center justify-content-around flex-wrap'>
                    <h4 className='p-1'><b>TCRTOAN0304</b><button className='btn btn-secondary btn-lg p-0 m-3' style={{ backgroundColor: '#B9C5DC' }}>Transferred</button></h4>

                    
                    <div className="small-vline"></div>

                    <div className='text-center'>
                      <p>Balance Advance Amount</p>
                      <p><b>1200000.00</b></p>
                    </div>

                    <div className="small-vline"></div>

                    <div className='text-center'>
                      <p>Balance Wt</p>
                      <p><b>181.132g</b></p>
                    </div>

                    <div className="small-vline"></div>

                    <div className='text-center'>
                      <p>Due Date</p>
                      <p><b>12/06/2025</b></p>
                    </div>

                    <div className="small-vline"></div>

                    <div className='text-center'>
                      <p>Customer Details</p>
                      <p><b>Rakesh Sankar | +91 98 95 124500</b> </p>
                      
                    </div>

                    

                    <a href="#" className='m-2'>Hide More Details</a>
                </div>
            </div>
        
        </div>
    </div>
      






     <div className="row mt-0 p-2  ">
      
        <div className="col-12 col-md-6 col-lg-1 mb-3 bg-light m-2 h-25 w-8 ">
          <div className="box border border-light p-2">Location
            <p><b>Thrissur</b></p>
          </div>
        </div>
        

        <div className="col-12 col-md-6 col-lg-1 mb-3 bg-light m-2 h-25 w-8 ">
          <div className="box border border-light p-2 ">Advance Date
            <p><b>20/06/2024</b></p>
          </div>
        </div>
        
        <div className="col-12 col-md-6 col-lg-2 mb-4 bg-light m-2 h-25 w-8 ">
          <div className="box border border-light p-2">Advance Amount
            <p><b>20,00,000</b></p>
          </div>
        </div>
        
        <div className="col-12 col-md-6 col-lg-2 mb-3 bg-light m-2 h-25 w-8" >
          <div className="box border border-light p-2">Order Amount
            <p><b>20,00,000</b></p>
          </div>
        </div>
        
        <div className="col-12 col-md-6 col-lg-1   mb-3 bg-light m-2 h-25">
          <div className="box border border-light p-2">Order Wt
            <p><b>30.887g</b></p>
          </div>
        </div>
        
        <div className="col-12 col-md-6 col-lg-2 mb-3 bg-light m-2 h-25">
          <div className="box border border-light p-2">Advance Type
            <p><b>Sale order Advance</b></p>
          </div>
        </div>
        
          <div className="col-12 col-md-6 col-lg-2 mb-4 bg-light m-2 h-30 ">
            <div className="box border border-light p-0">Advance Category
              <p><b>Kalyan Muhurat 10 Months Advance</b></p>
            </div>
          </div>
      </div>




      
     <div className="row mt-0 p-2  ">

              <table class="table table-striped table-light ">
            <thead class="table-light table table-bordered ">
              <th>Location</th>
              <th>Redeemed Date</th>
              <th>Redeemed order Wt</th>
              <th>Redeemed Advance Amount</th>
              <th>Balance Wt</th>
              <th>Balance Advance Amount</th>
            </thead>
            <tbody class="table-light ">
            <tr>
            <td>
              Thrissur
             </td>
             <td>
              21/06/2024
             </td>
             <td>
              75.472g
             </td>
             <td>
             5,00,000.00
             </td>
             <td>
             226.415g
             </td>
             <td>
            15,00,000.00
             </td>
            </tr>

            <tr>
            <td>
              Thrissur
             </td>
             <td>
              24/06/2024
             </td>
             <td>
              45.283g
             </td>
             <td>
             3,00,000.00
             </td>
             <td>
             181.132g
             </td>
             <td>
            12,00,000.00
             </td>
            </tr>

            <td>
             
             </td>
             <td>
             
             </td>
             <td>
             120.755g
             </td>
             <td>
             8,00,000.00
             </td>
             <td>
             
             </td>
             <td>
          
             </td>

            </tbody>
          </table>
       
      

      </div>

    

    </div>
  )
}

export default Layer3
