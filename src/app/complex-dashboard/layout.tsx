export default function ComplexDashboardLayout({
    children,
notification,
revenue,
}:{
    children: React.ReactNode
    notification: React.ReactNode
    revenue: React.ReactNode
}) {    
    return (
    <>
    <div>{children}</div>
    
    <div >
        <div >
            
            <div>
                <div>{notification} </div>
                <div>{revenue}  </div>

            </div>

        </div>

    </div>
    </>
    
    
)}
