import React, { useState } from 'react';
import './App.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { HeaderConatainer } from './components/header/HeaderConatainer';
import { Route, Routes } from 'react-router';
import { UsersContainer } from './components/Users/UsersContainer';
import { UserView } from './components/Users/user-view/UserView';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('users', '1', <UserOutlined />),
  // getItem('Add user', '2', <UserOutlined />),
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];




const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  console.log(items);


  const routeTo = (manu: any) => {

  }



  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ paddingTop: 5, height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)', color: '#fff', textAlign: 'center' }} >USERS</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={() => routeTo(items)} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }}><HeaderConatainer /></Header>
        <Content style={{ margin: '0 16px' }} className="content">
          <Routes>

            <Route path="/" element={<UsersContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path='/users/user/:id' element={<UserView />} />
            {/* <Route path='/products/search' element={<SearchContainer />} />
            <Route path="/products/categories" element={<CategoriesContainer />} /> */}
            {/* <Route path="/products/add" element={<AddProductContainer />} /> */}
          </Routes>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default App;


// import React from 'react';
// import { Route, Routes } from 'react-router';
// import './App.css';
// import { HeaderConatainer } from './components/header/HeaderConatainer';
// import { Login } from './components/login/Login';
// import { UsersContainer } from './components/Users/UsersContainer';

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <HeaderConatainer />
//       </header>
//       <section>
//         {/* <div className='login'>
//           <Login />
//         </div> */}

//         <Routes>
//           <Route path="/" element={<UsersContainer />} />
//           <Route path="/users" element={<UsersContainer />} />
//           {/* <Route path='/products/product/:id' element={< />} />
//           <Route path="/products/add" element={< />} /> */}
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </section>

//     </div>
//   );
// }

// export default App;

