import { useState, useEffect, useMemo } from "react";
import { database } from "./index";

// カスタムフックにしておく
const useDatabase = () => {
  // 同じパスでは毎回同じ結果が得られるのでmemo化しておく
  return useMemo(() => database.ref("/messages"), []);
};

// hooksを使いたいのでカスタムhooksにしておく
const useFetchData = (ref) => {
  const [data, setData] = useState();
  useEffect(() => {
    // イベントリスナーを追加するにはonを使う
    ref.on("value", (snapshot) => {
      console.log(snapshot);
      // パスに対する全データを含むsnapshotが渡される
      // ない場合はnullが変えるので存在をチェックしておく
      if (snapshot?.val()) {
        setData(snapshot.val());
      }
    });
    return () => {
      ref.off();
    };
    // refの変更に応じて再取得する
  }, [ref]);
  // データを返却する
  return { data };
};

// 実際に呼び出す際はこちらを使う
export const useFetchAllData = () => {
  // refを取得して
  const ref = useDatabase();
  // ref渡してデータを取得する
  return useFetchData(ref);
};

// データの書き込み
export const useSetData = (message) => {
  // refを取得して
  const ref = useDatabase();
  useEffect(() => {
    ref.set(message);
    return () => {
      ref.off();
    };
  }, [ref]);
};
