import React from "react";

const OverviewTab = () => {
  return (
    <div className="space-y-6">
  
       <div className="w-full rounded-xl border border-neutral-200 bg-white">
        <div className="rounded-lg p-8 bg-primary text-neutral-white shadow-elevation-3">
          <div className="flex justify-center items-end">
            <p className="text-center text-6xl font-bold ">1096</p>
            <p className="text-center text-lg">คน</p>
          </div>

          <p className="title-large-emphasized mt-2 text-center">
            จำนวนผู้เข้าร่วมกิจกรรมทั้งหมด
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <span className="headline-medium-emphasized">นิสิต: 1090 คน</span>
            <span className="headline-medium-emphasized">บุคลากร: 6 คน</span>
          </div>
        </div>
      </div>


      <div className="w-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">
          สถิติการลงทะเบียนแยกตามคณะ/หน่วยงาน
        </h2>
      </div>

      <div className="w-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">
          สถิติการลงทะเบียนแยกตามช่วงเวลา
        </h2>
      </div>
    </div>
  );
};

export default OverviewTab;
