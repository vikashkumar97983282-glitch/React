import { useState } from 'react'
import Card from './component/card'
import './index.css'

function App() {

  const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    brandName: "Google",
    posted: "30 days ago",
    title: "Graphic Designer",
    tags: ["Full-time", "Flexible schedule"],
    salary: "$150 - 220k",
    location: "Mountain View, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aYTGVsFR2iBQ2rNPwN17-J3_KYe-DH3emA&s",
    brandName: "Apple",
    posted: "12 days ago",
    title: "UI/UX Designer",
    tags: ["Full-time", "On-site"],
    salary: "$140 - 200k",
    location: "Cupertino, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAel73XxRrOwTx8yGLTOvVpoqkLUELbaRSLg&s",
    brandName: "Meta",
    posted: "7 days ago",
    title: "Product Designer",
    tags: ["Full-time", "Remote"],
    salary: "$160 - 230k",
    location: "Menlo Park, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQC8zoGKyaMRDAgp9s-IEsGe1vKqWN1EC-Q&s",
    brandName: "Amazon",
    posted: "3 days ago",
    title: "Visual Designer",
    tags: ["Contract", "Hybrid"],
    salary: "$90 - 130k",
    location: "Seattle, WA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1qA65lbq7b6F7V-uQXDfHnTtyCLC4M_Zj1Q&s",
    brandName: "Netflix",
    posted: "5 days ago",
    title: "Brand Designer",
    tags: ["Full-time", "Remote"],
    salary: "$170 - 250k",
    location: "Los Gatos, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    brandName: "Microsoft",
    posted: "14 days ago",
    title: "UX Researcher",
    tags: ["Full-time", "Hybrid"],
    salary: "$130 - 190k",
    location: "Redmond, WA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLdvYiApQJofXpIjkMrJgetTXWz5wKapxKeg&s",
    brandName: "Spotify",
    posted: "9 days ago",
    title: "Motion Designer",
    tags: ["Contract", "Remote"],
    salary: "$100 - 150k",
    location: "New York, NY"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicMDzk5BVKCMaspR4wow1fC8Kt9fDI-ACBg&s",
    brandName: "Airbnb",
    posted: "20 days ago",
    title: "Experience Designer",
    tags: ["Full-time", "Remote"],
    salary: "$155 - 225k",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIbEXAwHubF6uyMjuWqdgItvwGo4tUKViGw&s",
    brandName: "Uber",
    posted: "6 days ago",
    title: "Service Designer",
    tags: ["Full-time", "Hybrid"],
    salary: "$145 - 210k",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqybNCvgAj4feiTj8BZ_5qZdFqJp4S07HOA&s",
    brandName: "Stripe",
    posted: "2 days ago",
    title: "Design Systems Engineer",
    tags: ["Full-time", "Remote"],
    salary: "$180 - 260k",
    location: "Remote"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/060/100/974/non_2x/adobe-logo-square-rounded-adobe-logo-adobe-logo-free-download-free-png.png",
    brandName: "Adobe",
    posted: "11 days ago",
    title: "Senior Visual Designer",
    tags: ["Full-time", "Hybrid"],
    salary: "$160 - 230k",
    location: "San Jose, CA"
  },
  {
    brandLogo: "https://w7.pngwing.com/pngs/54/524/png-transparent-figma-app-logo-tech-companies-thumbnail.png",
    brandName: "Figma",
    posted: "4 days ago",
    title: "Product Design Lead",
    tags: ["Full-time", "Remote"],
    salary: "$190 - 270k",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXFQM-e2Eu87Ol4TzjWcmVY7YCNXVve_dvrQ&s",
    brandName: "Shopify",
    posted: "8 days ago",
    title: "UX Designer",
    tags: ["Full-time", "Remote"],
    salary: "$140 - 210k",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjXjgX17bPFLbaTnzhqcr3WJBr8LgEQR0wcA&s",
    brandName: "Snap Inc.",
    posted: "15 days ago",
    title: "Interaction Designer",
    tags: ["Contract", "On-site"],
    salary: "$120 - 170k",
    location: "Los Angeles, CA"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/social-media-logo_1305298-30304.jpg?semt=ais_hybrid&w=740&q=80",
    brandName: "LinkedIn",
    posted: "18 days ago",
    title: "Design Program Manager",
    tags: ["Full-time", "Hybrid"],
    salary: "$150 - 210k",
    location: "Sunnyvale, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46r7Z4HY666pUgQ2WbLBGYryew4Dhhzg0zw&s",
    brandName: "Pinterest",
    posted: "10 days ago",
    title: "Brand Experience Designer",
    tags: ["Full-time", "Remote"],
    salary: "$145 - 205k",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxZjMCjO7A2uohMjntXZG8R-xvjOCFlHHjw&s",
    brandName: "Lyft",
    posted: "13 days ago",
    title: "UX Content Designer",
    tags: ["Full-time", "Hybrid"],
    salary: "$135 - 195k",
    location: "San Francisco, CA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtU4BaId_yw76-0xef5oeMYpGUp6gsihluA&s",
    brandName: "Dropbox",
    posted: "16 days ago",
    title: "Product Designer II",
    tags: ["Full-time", "Remote"],
    salary: "$150 - 215k",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yLYRZNpsfK4cQDXu5PwlHZfKJOy0x7Zp2g&s",
    brandName: "Zoom",
    posted: "19 days ago",
    title: "Design Operations Manager",
    tags: ["Full-time", "Remote"],
    salary: "$155 - 220k",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrDCh90wZlzJiGagkRhA2jEtlHm3h9-1MPA&s",
    brandName: "Atlassian",
    posted: "21 days ago",
    title: "Senior UX Designer",
    tags: ["Full-time", "Remote"],
    salary: "$165 - 240k",
    location: "Remote"
  },
  {
  brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-6_KqTf3PBJIXSxhNHxpgiDgq6Eejbhw5g&s",
  brandName: "Tesla",
  posted: "10 days ago",
  title: "Product Designer",
  tags: ["Full-time", "Hybrid"],
  salary: "$150 - 210k",
  location: "Austin, TX"
},
  {
  brandLogo: "https://cdn.worldvectorlogo.com/logos/oracle-corporation-logo.svg",
  brandName: "Oracle",
  posted: "17 days ago",
  title: "UX/UI Lead",
  tags: ["Full-time", "Hybrid"],
  salary: "$145 - 215k",
  location: "Austin, TX"
}
];



  return (
    <>
      <div className='parent'>
        {jobs.map(function(job){
          return <Card brandlogo={job.brandLogo} company={job.brandName} logo={job.brandLogo} posted={job.posted} title={job.title} salary={job.salary} location={job.location} tag={job.tags}/>
        })}
      </div>
      
    </>
  )
}

export default App
