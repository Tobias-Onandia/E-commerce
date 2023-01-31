export const Productos =[
    {
      name: 'pantalones',
      title: 'Pantalones',
      description: 'Entra  para ver los diferentes pantalones',
      price: 848,
      url: 'pantalones',
      category:'pantalones',
      id: 1,
    },
    {
      name: 'REMERAS',
      title: 'remeras',
      description: 'Entra  para ver los diferentes remeras',
      price: 500,
      url: 'remeras',
      category:'remeras',
      id: 2,
    },  
    {
      name: 'sacos',
      title: 'sacos',
      description: 'Entra  para ver los diferentes sacos',
      price: 4500,
      url: 'sacos',
      category:'sacos',
      id: 3,
    },
    {
      name: 'pijamas',
      title: 'pijamas',
      description: 'Entra  para ver los diferentes pijamas',
      price: 300,
      url: 'pijamas',
      category:'pijamas',
      id: 4,
    },
    {
      name: 'zapatillas',
      title: 'zapatillas',
      description: 'Entra  para ver los diferentes zapatillas',
      price: 1000,
      url: 'zapatillas',
      category:'zapatillas',
      id: 5,
    },
]

export const getNotes = () => new Promise(resolve => setTimeout(() => resolve(Productos)), 500)
export const getNoteByCategory = categoryId =>  Productos.find(note => note.category === categoryId)