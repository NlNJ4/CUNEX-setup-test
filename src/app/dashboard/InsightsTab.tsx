import Button from "@components/Button";
import { ChartPieLabel } from "@components/ChartPieLabel";
import React from "react";

const InsightsTab = () => {
  return (
    <div className="w-full rounded-xl bg-neutral-white space-y-16">
      <div className="flex justify-between">
        <div className="space-x-4">
          <Button mode="filled" bordered="square" expanded={false}>
            ทั้งหมด
          </Button>
          <Button mode="outline" bordered="square" expanded={false}>
            นิสิต
          </Button>
          <Button mode="outline" bordered="square" expanded={false}>
            บุคลากร
          </Button>
        </div>
        <div>
          <Button mode="filled" bordered="square" expanded={false}>
            ตัวกรอง
          </Button>
        </div>
      </div>

      {/* mock up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl border border-neutral-200 bg-white">
        <div className="w-full rounded-xl border border-neutral-200 bg-white">
          <div className="flex flex-col justify-center rounded-lg h-full p-8 bg-primary text-neutral-white shadow-elevation-3">
            <div className="flex justify-center items-end">
              <p className="text-center text-6xl font-bold ">1096</p>
              <p className="text-center text-lg">คน</p>
            </div>

            <p className="title-large mt-2 text-center">
              จำนวนผู้เข้าร่วมกิจกรรมทั้งหมด
            </p>
            <div className="mt-4 flex justify-center gap-6 text-sm">
              <span className="headline-small-emphasized">นิสิต: 1090 คน</span>
              <span className="headline-small-emphasized">บุคลากร: 6 คน</span>
            </div>
          </div>
        </div>
        <ChartPieLabel />
        
      </div>

      <p className="headline-large-emphasized">
        สถิติการลงทะเบียนแยกตามคณะ/หน่วยงาน
      </p>

      {/* mock */}
      <div className="w-full rounded-xl border border-neutral-200 bg-white">
        <div className="rounded-lg p-8 bg-neutral-100 text-neutral-black shadow-elevation-3">
          <div className="flex justify-center items-end">
            <p className="text-center text-6xl font-bold ">1096</p>
            <p className="text-center text-lg">คน</p>
          </div>

          <p className="title-large mt-2 text-center">
            จำนวนผู้เข้าร่วมกิจกรรมทั้งหมด
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <span className="headline-small-emphasized">นิสิต: 1090 คน</span>
            <span className="headline-small-emphasized">บุคลากร: 6 คน</span>
          </div>
        </div>
      </div>

      <p className="headline-large-emphasized">
        สถิติการลงทะเบียนแยกตามช่วงเวลา
      </p>

      {/* mock */}
      <div className="w-full rounded-xl border border-neutral-200 bg-white">
        <div className="rounded-lg p-8 bg-neutral-100 text-neutral-black shadow-elevation-3">
          <div className="flex justify-center items-end">
            <p className="text-center text-6xl font-bold ">1096</p>
            <p className="text-center text-lg">คน</p>
          </div>

          <p className="title-large mt-2 text-center">
            จำนวนผู้เข้าร่วมกิจกรรมทั้งหมด
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <span className="headline-small-emphasized">นิสิต: 1090 คน</span>
            <span className="headline-small-emphasized">บุคลากร: 6 คน</span>
          </div>
        </div>
      </div>

      <Button mode="filled" bordered="square" expanded={false}>
        เปรียบเทียบสถิติการลงทะเบียนเข้าร่วมกิจกรรม
      </Button>
      
    </div>
  );
};

export default InsightsTab;
