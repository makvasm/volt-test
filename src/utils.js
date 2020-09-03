export const fields = {
  customers: [
    { name: "Name", input_name: "name", type: "text" },
    { name: "Phone", input_name: "phone", type: "text" },
    { name: "Address", input_name: "address", type: "text" }
  ],
  products: [
    { name: "Name", input_name: "name", type: "text" },
    { name: "Price", input_name: "price", type: "number" },
  ],
  invoices: [
    { name: "Customer id", input_name: "customer_id", type: "nubmer" },
    { name: "Discount", input_name: "discount", type: "number" },
    { name: "Total", input_name: "total", type: "number" }
  ]
}

export const routes = [
  { name: "Products", path: "/products" },
  { name: "Customers", path: "/customers" },
  { name: "Invoices", path: "/" },
]





export function GET(url) {
  return fetch(url)
    .catch(err => console.log("Ошибка при отправке запроса"))
    .then(response => {
      if (!response.ok) {
        throw new Error()
      }
      return response.json()
    });
}

export function SubmitForm(url, event, fields, method = "POST") {
  let data = {}

  fields.forEach(field => {
    data[field.input_name] = event.target[field.input_name].value
  })

  return fetch(url, {
    method: `${method.toUpperCase()}`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json()
    })
}
