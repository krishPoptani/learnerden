import AcademicDetailsForm from "@/component/User/userProfile/AcademicDetailsForm";
import BasicDetailsForm from "@/component/User/userProfile/BasicDetailsForm";
import ParentDetailsForm from "@/component/User/userProfile/ParentDetailsForm";
import PreferencesForm from "@/component/User/userProfile/PreferencesForm";
import ProfileSummary from "@/component/User/userProfile/ProfileSummary";
import UserDashboard from "@/routes/userside/page";
import React from "react";
const Profile = () => {
    return (
        <>
            <UserDashboard>
                <h1 className="text-4xl text-center mt-3 font-bold text-secondary">My Profile</h1>
                <div className="max-w-7xl mx-auto p-6 space-y-8">
                    <form className="grid md:grid-cols-2 gap-6">
                        <div className="md:col-span-1 space-y-6">
                            <BasicDetailsForm />
                            <ParentDetailsForm />
                            <AcademicDetailsForm />
                        </div>
                        <div className="md:col-span-1">
                            <ProfileSummary />
                            <PreferencesForm />

                        </div>
                    </form>
                </div>
            </UserDashboard >
        </>
    )
}
export default Profile