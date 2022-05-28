import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"><i>Your One Stop Car Shop</i>  </span>
        <span className="headerTitleLg">CARSS</span>
      </div>
      <img
        className="headerImg"
        // src="https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        // src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhpZ2glMjBxdWFsaXR5JTIwY2FyJTIwcGljdHVyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
    </div>
  );
}
