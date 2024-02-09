

export function Container({children, className}){
    let classX = className +' flex py-2 px-5 lg:px-20'
    return (
        <section className={classX}>
            {children}
        </section>
    )
}