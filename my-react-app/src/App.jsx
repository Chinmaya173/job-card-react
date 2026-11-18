import React from 'react'
import Card from './component/card'

const App = () => {
  const jobs = [
  {
    brandLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png",
    companyName: "Microsoft",
    datePosted: "2 days ago",
    post: "Backend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.jpg",
    companyName: "Amazon",
    datePosted: "1 day ago",
    post: "UI/UX Designer",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://lookaside.fbsbx.com/elementpath/media/?media_id=597423292333741&version=1782938342",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    companyName: "Netflix",
    datePosted: "6 days ago",
    post: "Graphic Designer",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$25/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuZ7B96adqCd4seTgK7wr0oSMc03vzxwyT_qxEjX2GxA&s=10",
    companyName: "Apple",
    datePosted: "4 days ago",
    post: "iOS Developer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
    companyName: "Spotify",
    datePosted: "7 days ago",
    post: "Product Designer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "Web Developer",
    tag: "Part Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Ahmedabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt10VG-v-B5_MuLXBwIWCDZvKJU89MHr1jaEajR_kwdM9XeEqzCFXxwmI&s=10",
    companyName: "Tesla",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://cdn.sanity.io/images/rn4tswnp/production/701c93f19c501de365d167e88aae6d09802cb629-1675x1103.jpg?h=320&auto=format&dpr=2",
    companyName: "Airbnb",
    datePosted: "5 days ago",
    post: "Marketing Manager",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Jaipur, India"
  }
];
  return (
    <div className="parent">
      {jobs.map((job) => (
        <Card companyName={job.companyName} post={job.post} tag={job.tag} tag2={job.tag2} pay={job.pay} location={job.location} datePosted={job.datePosted} logo={job.brandLogo} />
      ))}
    </div>
  )
}

export default App;