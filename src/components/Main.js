export default function Main({children}) {
    return (
        <main className="container mx-auto p-4">
            {children}
        </main>
    )
}


// Posso usar na function
// Main (props) {}
// E depois chamar como: props.children
// Ou fazer desctructuring como no exemplo acima