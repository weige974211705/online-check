import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../views/login/Login";
import Home from "../views/home/Home";
import InnerHome from "../views/home/InnerHome";
import Welcome from "../views/home/Welcome";

// 引入 学生管理
import StudentShow from "../views/studentManage/StudentShow";
import StudentAdd from "../views/studentManage/StudentAdd";
import StudentEdit from "../views/studentManage/StudentEdit";

// 引入 教师管理
import TeacherShow from "../views/teacherManage/TeacherShow";
import TeacherAdd from "../views/teacherManage/TeacherAdd";
import TeacherEdit from "../views/teacherManage/TeacherEdit";

// 引入 课程管理
import CourseShow from "../views/courseManage/CourseShow";
import CourseAdd from "../views/courseManage/CourseAdd";
import CourseEdit from "../views/courseManage/CourseEdit";

// 引入 我的课程
import MyCourse from "../views/myCourse/MyCourse";

//引入 全部课程
import AllCourse from "../views/allCourse/AllCourse";


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/welcome',
    children: [
      {path: '/welcome', component: Welcome},
      {path: '/innerHome', component: InnerHome},

      // 引入 学生管理
      {path: '/studentShow', component: StudentShow},
      {path: '/studentAdd', component: StudentAdd},
      {path: '/studentEdit', component: StudentEdit},

      // 引入 教师管理
      {path: '/teacherShow', component: TeacherShow},
      {path: '/teacherAdd', component: TeacherAdd},
      {path: '/teacherEdit', component: TeacherEdit},

      // 引入 课程管理
      {path: '/courseShow', component: CourseShow},
      {path: '/courseAdd', component: CourseAdd},
      {path: '/courseEdit', component: CourseEdit},

      // 引入 我的课程
      {path: '/myCourse', component: MyCourse},

      // 引入 全部课程
      {path: '/allCourse', component: AllCourse},

      // 引入 在线考试
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
