import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';


export default function YourPost({auth, postId, post}) {

    return (
        <div>
            <AuthenticatedLayout
                    user={auth.user}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add Images and Videos to your Post</h2>}        
            >
               <h1>YouR pOst</h1>
            </AuthenticatedLayout>
        </div>
    )
}