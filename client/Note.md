frontend 文件架构

组件结构

MVP
Minimum Viable Product 最小可行化产品


组件功能
- 未注册用户
- landing page / home page /首页 
- 登录 / 注册

- 已注册用户

- 个人设置页面/ 个人主页/ profile page
- 面板 boards => lists => cards > details 

- LandingPage
    - HomePage
        - NavBar
            - DropDownMenu
            - Logo
        - RegisterButton
      
    - LoginNRegister
        - Logo

- User
    - Setting
    - Board[]
        - Board
            - NavBar
                - DropDownMenu
                - Logo
            - DragNDrop 
    - List
    - Card

common components 
- NavBar
- DropDownMenu
- Logo


登陆/注册页面