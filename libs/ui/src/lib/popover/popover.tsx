/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Popover as HeadlessUIPopover, Transition } from '@headlessui/react';
import { Placement } from '@popperjs/core';
import { Fragment, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';

/* eslint-disable-next-line */
export interface PopoverProps {
    children: ReactNode
    trigger: ReactNode
    placement?: Placement
}

export function Popover({
    children, trigger, placement = 'auto-start'
}: PopoverProps) {
    const [referenceElement, setReferenceElement] = useState()
    const [popperElement, setPopperElement] = useState()
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement
    })

    return (
        <div >
            <HeadlessUIPopover className="relative">
                {/** @ts-ignore */}
                <HeadlessUIPopover.Button className='outline-none' ref={setReferenceElement}>
                    {trigger}
                </HeadlessUIPopover.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <HeadlessUIPopover.Panel
                        className='rounded border border-N300 p-2 mt-2 absolute scrollbar-hide z-10 drop-shadow-elevation-04 bg-N0'
                        // @ts-ignore
                        ref={setPopperElement}
                        style={styles.popper}
                        {...attributes.popper}>
                        {children}
                    </HeadlessUIPopover.Panel>
                </Transition>
            </HeadlessUIPopover>
        </div>
    );
}

export default Popover;