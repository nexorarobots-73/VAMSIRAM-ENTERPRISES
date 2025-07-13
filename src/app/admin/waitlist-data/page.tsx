
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firestore';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';
import * as XLSX from 'xlsx';

interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  timestamp: Date | null;
}

export default function WaitlistDataPage() {
  const [waitlist, setWaitlist] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('vamsiram-admin-auth') === 'true';
    if (!isAuthenticated) {
      router.replace('/admin/login');
      return;
    }

    const fetchWaitlist = async () => {
      try {
        const q = query(collection(db, 'waitlist'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        const waitlistData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            interest: data.interest,
            timestamp: (data.timestamp as Timestamp)?.toDate() || null,
          };
        });
        setWaitlist(waitlistData);
      } catch (error) {
        console.error("Error fetching waitlist data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWaitlist();
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('vamsiram-admin-auth');
    router.push('/admin/login');
  };

  const handleExport = () => {
    const dataToExport = waitlist.map(entry => ({
        Name: entry.name,
        Email: entry.email,
        Phone: entry.phone,
        Interest: entry.interest,
        Timestamp: entry.timestamp ? entry.timestamp.toLocaleString() : 'N/A'
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Waitlist");
    XLSX.writeFile(workbook, "vamsiram_waitlist_export.xlsx");
  }

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-secondary/50 p-4 sm:p-6 md:p-8">
      <div className="container mx-auto">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Waitlist Submissions</CardTitle>
                <div className='flex items-center gap-4'>
                    <Button onClick={handleExport} variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Export to Excel
                    </Button>
                    <Button onClick={handleLogout} variant="destructive" size="sm">
                        Logout
                    </Button>
                </div>
            </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Interest</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {waitlist.length > 0 ? (
                  waitlist.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell>{entry.timestamp ? entry.timestamp.toLocaleString() : 'N/A'}</TableCell>
                      <TableCell>{entry.name}</TableCell>
                      <TableCell>{entry.email}</TableCell>
                      <TableCell>{entry.phone}</TableCell>
                      <TableCell>{entry.interest}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      No submissions yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
