import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { tag } = req.query; // 프론트엔드에서 선택한 태그를 쿼리 파라미터로 전달받음

      const dbId1 = "NOTION_DATABASE_ID";
      const dbId2 = "NOTION_DATABASE_ID2";

      // 두 개의 데이터베이스 ID로부터 데이터를 가져오기
      const response1 = await notion.databases.query({
        database_id: dbId1,
      });

      const response2 = await notion.databases.query({
        database_id: dbId2,
      });

      // 가져온 데이터를 하나의 배열로 합치기
      const projectDb = [...response1.results, ...response2.results];

      // 태그에 따라 필터링된 카테고리 목록 생성
      const cateFilter = projectDb.filter((item) =>
        item.properties.Tag.multi_select.some((tagObg) => tagObg.name === tag)
      );

      // 필터링된 카테고리 목록 반환
      res.status(200).json(cateFilter);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
