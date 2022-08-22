import React from 'react';
import { Tab, TabsObject } from '../../interfaces';
import Delete from '../../images/delete.svg';

type Props = {
	tabsObject: TabsObject;
};

const Tabs = ({
	tabsObject: { tabs, setTabs, currentTab, setCurrentTab, handleDeleteTab },
}: Props) => {
	return (
		<div className='navbar-second'>
			<ul className='navbar-tabs'>
				{tabs.length !== 0 ? (
					tabs.map((tab: Tab, index: number) => (
						<li
							className={
								'navbar-tab ' +
								(currentTab === tab.id ? ' selected-tab' : '')
							}
							key={index}
							onClick={() => setCurrentTab(tab.id)}
						>
							<div>{tab.title}</div>
							{currentTab !== tab.id ? (
								<img
									src={Delete}
									alt='delete tab'
									onClick={(e) => handleDeleteTab(index, e)}
								/>
							) : (
								<></>
							)}
						</li>
					))
				) : (
					<li className='navbar-tab selected-tab'>No tabs</li>
				)}
			</ul>
		</div>
	);
};

export default Tabs;
