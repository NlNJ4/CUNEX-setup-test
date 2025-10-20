import Button from "@components/Button";
import { ChartBarOverview } from "@components/ChartBarOverView";
import { ChartBarVertical } from "@components/ChartBarVertical";
import React from "react";

const OverviewTab = () => {
  return (
    <div className="flex flex-col space-y-16">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-8">
          <p className="headline-large-emphasized">Freshmen night</p>

          <div className="flex flex-col space-y-4">
            <div className="px-4space-y-2 body-medium">
              <p>3 สิงหาคม 2568</p>
              <p>16:00 - 20:00 น.</p>
              <p>สนามกีฬาจุฬาลงกรณ์มหาวิทยาลัย</p>
            </div>
            <div className="flex flex-col space-y-2 px-4 ">
              <p className="headline-small-emphasized">รายละเอียดกิจกรรม</p>
              <p className="body-large-primary">
                กิจกรรมต้อนรับนิสิตใหม่ CU รุ่น 109 สู่รั้วมหาวิทยาลัย
                และกระชับสัมพันธ์ อันดีระหว่างน้องใหม่คณะต่าง ๆ
                ภายในงานมีการจัดแสดงดนตรีโดยวงดนตรี เช่น Landokmai, Dept,
                Polycat, Tilly Birds การแสดงพิเศษจาก CUDC และละครนิเทศ จุฬาฯ
              </p>
            </div>
          </div>

          <div>
            <Button mode="filled" bordered="square" expanded={false}>
              ดูเต็มหน้าจอ
            </Button>
          </div>
        </div>
        <div className="h-full w-full rounded-xl border border-neutral-200 bg-white">
          <div className="flex flex-col justify-center h-full rounded-lg p-8  bg-primary text-neutral-white shadow-elevation-3">
            <div className="flex justify-center items-end ">
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
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="headline-large-emphasized">
            3 อันดับแรกของคณะ/หน่วยงานที่ลงทะเบียน
          </p>
          <ChartBarVertical />
          <Button mode="filled" bordered="square" expanded={false}>
            ดูทั้งหมด
          </Button>
        </div>

        <div className="space-y-6">
          <p className="headline-large-emphasized">
            สถิติการลงทะเบียนแยกตามช่วงเวลา
          </p>
          <ChartBarOverview />
        </div>
      </section>
    </div>
  );
};

export default OverviewTab;
