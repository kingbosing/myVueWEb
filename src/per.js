
import router from './router'


router.beforeEach((to, from, next) => {
    // console.log(to.path)
    if(to.path==='/'){
        next({ path: '/login' })
    }else{
        next()
    }
    // else{
    //     next({ path: '/home/index' })
    // }

})