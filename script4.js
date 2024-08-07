function canTakeLeave(
  totalCompanyLeaves,
  joinDate,
  plannedLeaveDate,
  leaveDuration
) {
  const totalPersonalLeaves = 14 - totalCompanyLeaves; // Total cuti pribadi
  const joinDateObj = new Date(joinDate);
  const plannedLeaveDateObj = new Date(plannedLeaveDate);
  const oneYearLater = new Date(
    joinDateObj.setFullYear(joinDateObj.getFullYear() + 1)
  );
  const eligibleStartDate = new Date(
    joinDateObj.setDate(joinDateObj.getDate() + 180)
  );

  // Cek jika karyawan belum bekerja 180 hari
  if (plannedLeaveDateObj < eligibleStartDate) {
    return {
      result: false,
      reason: "Karyawan belum bekerja selama 180 hari.",
    };
  }

  // Hitung proporsional cuti untuk karyawan baru di tahun pertama
  let availableLeaves;
  if (plannedLeaveDateObj < oneYearLater) {
    const daysWorkedInFirstYear =
      Math.min(
        plannedLeaveDateObj.getTime() - eligibleStartDate.getTime(),
        oneYearLater.getTime() - eligibleStartDate.getTime()
      ) /
      (1000 * 60 * 60 * 24);
    availableLeaves = Math.floor(
      (daysWorkedInFirstYear / 365) * totalPersonalLeaves
    );
  } else {
    availableLeaves = totalPersonalLeaves;
  }

  // Cek sisa cuti dan durasi cuti
  if (leaveDuration > 3 || leaveDuration > availableLeaves) {
    return {
      result: false,
      reason: "Durasi cuti melebihi batas atau sisa cuti tidak mencukupi.",
    };
  }

  return {
    result: true,
    reason: "Karyawan berhak mengambil cuti.",
  };
}

// Contoh penggunaan
const totalCompanyLeaves = 7;
const joinDate = "2021-01-05";
const plannedLeaveDate = "2021-12-18";
const leaveDuration = 1;

const result = canTakeLeave(
  totalCompanyLeaves,
  joinDate,
  plannedLeaveDate,
  leaveDuration
);
console.log(result);
