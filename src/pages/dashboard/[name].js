
 function UserDash (props){
    const router = useRouter()
    const { name } = router.query
    return(
        <div>
            <p>need</p>
            {JSON.stringify(props)}
        </div>

    )
}

export async function getServerSideProps() {
    if (!name) {
        return {
          redirect: {
            destination: '/login',
            permanent: false,
          },
        }
      }
    return{
        props:{name:"james"}
    }
}

export default UserDash