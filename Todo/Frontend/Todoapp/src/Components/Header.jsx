import { Link } from 'react-router-dom';

const list = [
  { name: "logo", path: "/" },
  { name: "signin", path: "/signin" },
  { name: "todos", path: "/todo" },
  { name: "tasks", path: "/tasks" },
  { name: "addtask", path: "/addtask" }
];

const Header = () => {
  return (
    <div className='flex'>
     <div className="justify-between">
     <ul className='flex '>
        {list.map((item, ind) => (
          <li key={ind} className='font-bold p-10'>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
     </div>
    </div>
  );
}

export default Header;
