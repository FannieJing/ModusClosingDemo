import React from 'react';
import './../App.css';
import { Layout, Menu, Breadcrumb, Icon, List } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

const data = [{
	title: 'There is some informations',
	description: 'There is some descriptions'
},{
	title: 'There is some informations',
	description: 'There is some descriptions'
}];


export class Home extends React.Component{

	state = {
		collapsed: false
	}

	onCollapse=collapsed=>{
		this.setState({collapsed});
	}
	


	render(){
		return (
			<Layout style={{minHeight:'100vh'}}>
				<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
					<div className="logo">LOGO</div>
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
						<Menu.Item key='1'>
							<Icon type="line-chart" />
							<span>Option 1</span>
						</Menu.Item>
						<Menu.Item key='2'>
							<Icon type="pie-chart" />
							<span>Option 2</span>
						</Menu.Item>
						<SubMenu
						key="user"
						title={
							<span>
								<Icon type="user" />
								<span>Option 3</span>
							</span>
						}
						>
							<Menu.Item key='3'>item 1</Menu.Item>
							<Menu.Item key='4'>item 2</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{background:'#fff', padding:0}}></Header>
					<Content style={{margin: '0 16px'}}>
						<Breadcrumb style={{margin: '16px 0'}}>
							<Breadcrumb.Item>Dashboard</Breadcrumb.Item>
						</Breadcrumb>
						<div style={{padding:24, background: '#fff', minHeight:400}}>
							<List
							itemLayout="horizontal"
							dataSource={data}
							renderItem={item=>(
								<List.Item>
									<List.Item.Meta
									title={item.title}
									description={item.description}/>
								</List.Item>
								)
							}>				
							</List>
						</div>
					</Content>
					<Footer style={{textAlign:'center'}}>Test</Footer>
				</Layout>
			</Layout>

			)
	}

}