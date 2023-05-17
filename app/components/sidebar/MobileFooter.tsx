"use client"

import useConversation from "@/app/hooks/useConversation"
import useRoutes from "@/app/hooks/useRoutes"
import MobileItem from "./MobileItem"
import SettingsModal from "./SettingsModal"
import { User } from "@prisma/client"
import { useState } from "react"
import Avatar from "../Avatar"
import { HiCog } from "react-icons/hi"
import Image from "next/image"
import MobileSettingsAvatar from "./MobileSettingsAvatar"

interface MobileFooterProps {
  currentUser: User
}

const MobileFooter: React.FC<MobileFooterProps> = ({ currentUser }) => {
  const routes = useRoutes()
  const { isOpen } = useConversation()
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)

  if (isOpen) {
    return null
  }

  return (
    <div className="fixed bottom-0 z-40 flex items-center justify-between border-t-[1px] w-full bg-white lg:hidden">
      {/* Settings for mobile */}
      <SettingsModal
        currentUser={currentUser}
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
      />
      <button
        onClick={() => setIsSettingsModalOpen(true)}
        className="flex justify-center w-full p-4 text-sm font-semibold leading-6 text-gray-500 group gap-x-3 hover:text-black hover:bg-gray-100"
      >
        <MobileSettingsAvatar user={currentUser} />
      </button>
      {routes.map((route) => (
        <MobileItem
          key={route.href}
          href={route.href}
          active={route.active}
          icon={route.icon}
          onClick={route.onClick}
        />
      ))}
    </div>
  )
}

export default MobileFooter
