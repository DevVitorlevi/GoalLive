import React from 'react';
import { TabsContainer, Tab } from './MatchStatusTab';

const MatchStatusTabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'all', label: 'All' },
        { id: 'live', label: 'Live' },
        { id: 'scheduled', label: 'Scheduled' },
        { id: 'finished', label: 'Finished' },
    ];

    return (
        <TabsContainer>
            {tabs.map((tab) => (
                <Tab
                    key={tab.id}
                    $active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </Tab>
            ))}
        </TabsContainer>
    );
};

export default MatchStatusTabs;