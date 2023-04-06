import React from 'react'

export default function Footer() {
  let footerStyle={
    position:"relative",
    top:"20vh",
    width:"100%"
  }
  return (
    <div
      className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary" style={footerStyle}>
      {/* <!-- Copyright --> */}
      <div className="text-white mb-3 mb-md-0">
        Copyright © 2023. All rights reserved.
      </div>
    </div>
  )
}
// export default Navbar