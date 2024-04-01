// pages/api/data.js
export default function handler(req, res) {
    if (req.method === 'GET') {
        // GET 요청을 처리하는 로직
        const json_response = {
            "data": [
            { "id": 1, "name": "John Doe", "email": "john@example.com" },
            { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
            ]
        };
        res.status(200).json(json_response);
    } else {
        // 다른 HTTP 메소드의 요청을 처리하지 않음
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
  