// pages/api/data.js
export default async function handler(req, res) {
    console.log('API 라우트가 호출되었습니다.');

    if (req.method === 'GET') {
        // GET 요청을 처리하는 로직
        const json_response = {
            "data": [
            { "id": 1, "name": "John Doe", "email": "john@example.com" },
            { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
            ]
        };
        res.status(200).json(json_response);
    }
    else if (req.method === 'POST') {
        // POST 요청의 본문에서 데이터를 추출
        const body = await req.body;
        // 추출한 데이터를 콘솔에 출력
        console.log('POST 요청 데이터:', body);
        
        const json_response = {
            "data": ["POST"]
        };
        res.status(200).json(json_response);
    }
    else {
        // 다른 HTTP 메소드의 요청을 처리하지 않음
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
  