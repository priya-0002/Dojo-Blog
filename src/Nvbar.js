const Nvbar  = () => {
    return (  
        <nav className="navbar">
           <h1>Dojo blog</h1> 
            <div className="links">
                <a href="/" style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'}}
                > Home</a>

                <a href="/create"style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>New Blog</a>
                
            </div>

            
        </nav>
    );
}
 
export default Nvbar;