
import NavLink from "@/components/NavLink"

export default function MenuList() {
  return (<>
    <NavLink />

    <ul className="menu-list flex justify-center gap-4 list-none p-0 m-0">
      {/* <li>Work</li>
      <li>About</li>
      <li>Contact</li> */}
    </ul>

  </>)
}
//  {menu.map((item) => (
//       <li key={item.id}>
//         <Link href={`/news/${item.slug}`}>
//           <img src={`/images/menu/${item.image}`} alt={item.title} />
//           <span>{item.title}</span>
//         </Link>
//       </li>
//     ))}