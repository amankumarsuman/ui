import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function SocialMedia() {
  return (
   <>
   <div style={{width:"10%",marginTop:"70%",margin:"auto",display:"flex",justifyContent:"space-between",}}>
<FacebookIcon sx={{fontSize:"80px"}}/>
<InstagramIcon sx={{fontSize:"80px"}}/>
<TwitterIcon sx={{fontSize:"80px"}}/>
{/* <img src="./twitter.png" alt="twitter"/> */}
   </div>
   </>
  )
}

export default SocialMedia